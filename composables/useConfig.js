export default () => {
    const config = useRuntimeConfig()
    console.log(config.secret)

    return config;
  }