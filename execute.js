function execute(prefix, msg) {
  if (msg.content === `${prefix}msg`) {
    console.log('hello world ok')
  }
}

module.exports = execute
