# Ava

Ava is a demo blog template made for [Ekto](https://github.com/bnhansn/ekto).

This project was created with [create-react-app](https://github.com/facebookincubator/create-react-app).

## Getting Started

Create an account at [https://ekto.tech](https://ekto.tech).

On your Ekto account settings page:

* Make a note of the account key.
* Add your website's url to the domains list. (Ex: `http://localhost:3000`, `http://www.your-website.com`).

Set the environment variable `REACT_APP_EKTO_KEY` to your account key when starting the application.

```
$ REACT_APP_EKTO_KEY=$EKTO_KEY npm start
```

## Deploying to S3

Easily deploy your site to AWS S3.

Prerequisites:
* Create an S3 bucket enabled for static website hosting.
* Create an AWS IAM user with full S3 access to your bucket.
* Create the file `.env` in your project root based on `.env.example` and fill in the variables for your S3 bucket and IAM user.

To deploy:

```
$ REACT_APP_EKTO_KEY=$EKTO_KEY npm run deploy
```

This command first runs `npm run build` to build a production optimized build of your application, followed by `npm run deploy`. The deploy command runs the script `./scripts/upload.js` to sync the `/build` directory to your S3 bucket.

## License

MIT
