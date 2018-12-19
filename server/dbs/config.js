export default {
  dbs: 'mongodb://127.0.0.1:27017/student',
  redis: {
    get host () {
      return '127.0.0.1'
    },
    get port () {
      return 6379
    }
  },
  smtp: {
    get host () {
      return 'smtp.qq.com'
    },
    get user () {
      return '605134015@qq.com'
    },
    // 邮箱授权码
    get pass () {
      return 'gfoeqqepqqexbcdd'
    },
    // 随机验证码
    get code () {
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    },
    // 过期时间
    get expire () {
      return () => {
        return new Date().getTime() + 60 * 60 * 1000
      }
    }
  }
}
