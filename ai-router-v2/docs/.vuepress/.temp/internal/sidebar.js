export const sidebar = {"/":{"/algorithm/":{"items":[{"text":"算法","collapsed":false,"items":["linear_regression","softmax","multilayer_perceptron","cnn","modern_cnn","rnn","attention","transformer","moe"]}],"prefix":"/notes/algorithm/"},"/system/":{"items":[{"text":"Inference","prefix":"inference","collapsed":false,"items":["flash_attention","kvcache","mqa_gqa","page_attention","paper"]},{"text":"Pre-Train","prefix":"pre-train","collapsed":false,"items":["model_parallel","pp_communication"]},{"text":"Quant","prefix":"quant","collapsed":false,"items":["introduce","pytorch_quant"]},{"text":"RL","prefix":"rl","collapsed":false,"items":["introduce"]}],"prefix":"/notes/system/"},"/cuda/":{"items":[{"text":"CUDA","collapsed":false,"items":["gemm","hardware","memory"]},{"text":"ThunderKittens","collapsed":false,"prefix":"kittens","items":["ptx_inline"]},{"text":"Exercises","collapsed":false,"prefix":"exercise","items":["chapter01"]}],"prefix":"/notes/cuda/"},"/cpp/":{"items":[{"text":"C++","collapsed":false,"items":["const","move","type_inference","modern_cpp_features"]}],"prefix":"/notes/cpp/"},"/pytorch/":{"items":[{"text":"PyTorch","collapsed":false,"items":["basic","gradient"]}],"prefix":"/notes/pytorch/"},"/python/":{"items":[{"text":"Python","collapsed":false,"items":["thread"]}],"prefix":"/notes/python/"},"/papers/":{"items":[{"text":"Papers","collapsed":false,"items":["summary_record","transformer"]}],"prefix":"/notes/papers/"}},"__auto__":{},"__home__":{}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
