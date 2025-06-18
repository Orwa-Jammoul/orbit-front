<template>
  <img :src="imgSrc" id="pdf-image" alt="First page of PDF will appear here">
</template>

<script setup>
const {pdfUrl} = defineProps(['pdfUrl'])
// useHead({
//   script: [
//     {
//       src: `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js`,
//       tagPosition: 'bodyClose',
//       defer: true
//     },
//   ],
// })

const imgSrc = ref(null)

async function pdfToImage (pdfUrl){
  if(!pdfUrl){
    return ''
  }
  const loadingTask = pdfjsLib.getDocument(pdfUrl);
  const pdf = await loadingTask.promise;
  
  // Get the first page
  const page = await pdf.getPage(1);
  const scale = 2; // Scale for rendering the image
  const viewport = page.getViewport({ scale });

  // Prepare canvas
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.height = viewport.height;
  canvas.width = viewport.width;

  // Render PDF page into canvas context
  const renderContext = {
      canvasContext: context,
      viewport: viewport
  };
  await page.render(renderContext).promise;

  const imgSrc_ = canvas.toDataURL();
  return imgSrc_;
  // Convert canvas to image data URL
  // document.getElementById('pdf-image').src = imgSrc; // Set the src of the img element
}

// Example usage
// const pdfUrl = 'https://adminpanel.orbit-eng.net/Files/Images/EmployeeORequests/P-0 (199).pdf'; // Replace with your PDF URL
imgSrc.value = await pdfToImage(pdfUrl);
</script>

<style lang="scss" scoped>
#pdf-image {
  max-width: 100%;
  height: auto;
}
</style>