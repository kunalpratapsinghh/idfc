module.exports = {
  apps: [
    {
      name: "osb-frontend",
      script: "pnpm",
      args: "start",
      env: {
        NODE_ENV: "",
        PORT: 3000
      },
      env_uat: {
        NODE_ENV: "uat",
        PORT: 3004
      },
      env_preprod: {
        NODE_ENV: "preprod",
        PORT: 3003
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3004
      }
    }
  ]
};
