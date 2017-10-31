const expect = require('expect')
const handler = require('./handler')

let lambdaResponse
handler.hello(null, null, (body, response) => {
  lambdaResponse = JSON.parse(response.body).message
})
expect(lambdaResponse).toEqual(
  'Go Serverless v1.0! Your function executed successfully!'
)
console.log('all tests passed successfully')
