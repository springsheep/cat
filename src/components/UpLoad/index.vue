<!--
 * @Author: your name
 * @Date: 2021-06-04 12:38:45
 * @LastEditTime: 2021-06-19 15:24:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qrcm/src/components/UpLoad/index.vue
-->
<template>
  <div class="clearfix">
    <a-upload
      action="/qrcm/api/qrcm/common/upload"
      list-type="picture-card"
      :file-list="fileList"
      :remove="handleRemove"
      :beforeUpload="beforeUpload"
      @preview="handlePreview"
      @change="handleChange"
      :disabled="disabled"
      :customRequest="customRequest"
    >
      <div v-if="fileList.length < limit && !disabled">
        <a-icon type="plus" />
        <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload>
    <a-modal
      :maskClosable="false"
      :visible="previewVisible"
      :footer="null"
      @cancel="handleCancel"
    >
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    limit: {
      type: Number,
      default: 1,
    },
    fileListArr: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      previewVisible: false,
      previewImage: "",
      fileList: [],
    };
  },
  created() {
    console.log(this.fileListJson);
  },
  watch: {
    fileListArr: {
      handler(e) {
        if (e) {
          this.fileList = e;
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    isJSON(str) {
      if (typeof str == "string") {
        try {
          var obj = JSON.parse(str);
          if (typeof obj == "object" && obj) {
            return true;
          } else {
            return false;
          }
        } catch (e) {
          return false;
        }
      }
    },
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
    },
    beforeUpload() {
      return new Promise((resolve, reject) => {
        if (this.fileList.length >= this.limit) {
          this.$message.error(`文件最多能上传${this.limit}个`);
          reject();
        } else {
          resolve();
        }
      });
    },
    async customRequest(data) {
      const formData = new FormData();
      formData.append("file", data.file);
      this.$api
        .upload({ data: formData })
        .then((res) => {
          if (res.code == 200) {
            this.fileList.push({
              uid: res.data.id,
              name: res.data.fileName,
              status: "done",
              url: this.$store.state.previewUrl + res.data.filePath,
            });
            data.onSuccess(res.data);
          } else {
            this.fileList.pop();
          }
        })
        .catch(() => {
          data.onError(); //上传失败
          this.fileList.pop();
        });
    },
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange() {
      this.$emit("update:fileListArr", this.fileList);
    },
  },
};
</script>
<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
