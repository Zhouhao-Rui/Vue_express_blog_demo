<template>
  <div>
<el-form @submit.native.prevent ref="form" :model="article" label-width="80px">
  <el-form-item label="文章标题">
    <el-input v-model="article.title"></el-input>
  </el-form-item>
  <el-form-item label="文章内容">
    <el-input type="textarea" v-model="article.body"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit" @click="saveArticle">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>

export default{
    name: 'CreateArticle',
    data() {
      return {
        article: {
         title: '',
         body: ''
        }
      }
    },
    methods: {
      saveArticle() {
          this.$http.post('articles', this.article).then(res => {
            this.$message({
              message: '文章创建成功',
              type: 'success',
            })
            this.$router.push('/articles/index')
          })
          console.log(this.article)
      }
    }
}
</script>

<style scoped>

</style>