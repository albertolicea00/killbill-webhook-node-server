import killbill from 'killbill';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.KB_USERNAME;
const PASSWORD = process.env.KB_PASSWORD;
const TENANT = process.env.KB_TENANT;
const API_KEY = process.env.KB_API_KEY;
const API_SECRET = process.env.KB_API_SECRET;
const BASE_PATH = process.env.KB_API_URL;

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

//optional - follow location header when new object is created
axiosInstance.interceptors.response.use(
  killbill.followLocationHeaderInterceptor
);

const config = new killbill.Configuration({
  username: USERNAME,
  password: PASSWORD,
  apiKey: killbill.apiKey(API_KEY, API_SECRET),
  basePath: BASE_PATH,
});

const xKillbillCreatedBy = `${process.env.APP_PROTOCOL}://${process.env.APP_HOST}:${process.env.APP_PORT}/listener/`;
const xKillbillReason = undefined;
const xKillbillComment = undefined;

export {
  killbill,
  config as kbConfig,
  axiosInstance as kbAxios,
  xKillbillCreatedBy,
  xKillbillReason,
  xKillbillComment,
};
