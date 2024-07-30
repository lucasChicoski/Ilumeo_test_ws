module.exports = {
  apps : [{
    name   : "desafio-autoglass",
    interpreter : "ts-node",
    script : "./src/app.ts",
    instances: "1",
    watch: true
  }]
}
