// 放各种工具函数：

export function getRedirectPath({type, avatar}) {
  // 根据用户信息，返回跳转地址：现在有四种
  // user.type /boss /genius
  // user.avatar /bossinfo /geniusinfo
  let url = (type === 'boss') ? '/boss' : '/genius'
  if (!avatar) {
    url += 'info'
  }
  return url
}