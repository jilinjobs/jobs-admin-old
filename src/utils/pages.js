
const pages = {
  Error403: ()=>import('~/components/error/403.vue'),
  Error404: ()=>import('~/components/error/404.vue'),
  Error500: ()=>import('~/components/error/500.vue'),
  "page1": ()=>import('~/views/demo/page1.vue'),
  "page2": ()=>import('~/views/demo/page2.vue'),
}
export default pages;
