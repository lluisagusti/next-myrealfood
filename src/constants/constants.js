export const apiUrl = `https://world.openfoodfacts.org/api/v2`;

export const stack = [
    { name: "Next.js", url:"https://www.nextjs.org" },
    { name: "React", url:"https://www.reactjs.org" },
    { name: "ReactDOM", url:"https://www.npmjs.com/package/react-dom" },
    { name: "Semantic UI", url:"https://react.semantic-ui.com/" },
    { name: "Cookie", url:"https://www.npmjs.com/package/cookie" },
    { name: "JS-Cookie", url:"https://www.npmjs.com/package/js-cookie" },
    { name: "Quagga", url:"https://www.npmjs.com/package/quagga" },
]

export const scannerConfig = {
    "showCanvas": false,
    "inputStream": {
      "type": "LiveStream",
      "constraints": {
        "width": { "min": 450 },
        "height": { "min": 300 },
        "facingMode": "environment",
        // "aspectRatio": { "min": 1, "max": 2 }
      }
    },
    "numOfWorkers": 2,
    "frequency": 10,
    "decoder": {
      "readers": ["ean_reader"]
    },
    // "singleChannel": false // true: only the red color-channel is read
  }