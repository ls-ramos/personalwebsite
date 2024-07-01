export default ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-firebase-storage",
      providerOptions: {
        serviceAccount: JSON.parse(env("SA_BUCKET", "{}")),
        bucket: env("STORAGE_BUCKET_URL"),
        sortInStorage: true,
        debug: false, 
      },
    },
  },
});
