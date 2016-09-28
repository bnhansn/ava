# Ava

Ava is a demo blog template made for [Ekto](https://github.com/bnhansn/ekto).

This project was created with [create-react-app](https://github.com/facebookincubator/create-react-app).

## Getting Started

Create an account at [https://ekto.tech](https://ekto.tech).

Make a note of the API key on your Ekto account settings page.

Clone the repository.

```
$ git clone https://github.com/bnhansn/ava.git
$ cd ava
```

Create a `.env` file in the project root and add your Ekto API key.

```
$ touch .env
$ echo "REACT_APP_EKTO_KEY=<your api key>" >> .env
```

Install project dependencies.

```
$ npm install
```

Start the application.

```
$ npm start
```

## Deploying to S3

Easily deploy your site to AWS S3.

Prerequisites:
* Create an S3 bucket enabled for static website hosting.
* Create an AWS IAM user with full S3 access to your bucket.
* Add the values for your S3 bucket and IAM user to the AWS_* variables in your `.env` file based on `.env.example`.

To deploy:

```
$ REACT_APP_EKTO_KEY=<your api key> npm run deploy
```

The deploy command first runs `npm run build` to create a production optimized build of your application, followed by `npm run upload`. The upload command runs the script `./scripts/upload.js` to sync the `/build` directory to your S3 bucket.

## License

MIT
