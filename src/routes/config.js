// prettier-ignore
import { killbill, kbConfig, kbAxios, xKillbillCreatedBy } from '../services/killbill.js';
import express from 'express';
import dotenv from 'dotenv';
const router = express.Router();

dotenv.config();

router

  /**
   * POST /
   * Register new push notification callbacks.
   * @route POST /
   * @param {string} cb - The callback URL for Killbill notifications. If not provided, the default URL will be used.
   * @returns {Object} 200 - An array of push notification callbacks
   */
  .post('/', async (req, res) => {
    const default_CALLBACK = `${process.env.APP_PROTOCOL}://${process.env.APP_HOST}:${process.env.APP_PORT}/listener1/`;
    const CALLBACK_URL = req.body.cb || default_CALLBACK;

    // Add new notifications subscription
    // prettier-ignore
    await new killbill.TenantApi(kbConfig, null, kbAxios).registerPushNotificationCallback(xKillbillCreatedBy, CALLBACK_URL);

    // Check notifications subscription
    // prettier-ignore
    const result = await new killbill.TenantApi(kbConfig, null, kbAxios).getPushNotificationCallbacks();
    if (result.data.values.includes(CALLBACK_URL)) {
      res.json(result.data);
    } else {
      res.status(503).json();
    }
  })

  /**
   * GET /
   * Retrieve push notification callbacks.
   * @route GET /
   * @returns {Object} 200 - An array of push notification callbacks
   */
  .get('/', async (req, res) => {
    // prettier-ignore
    const result = await new killbill.TenantApi(kbConfig, null, kbAxios).getPushNotificationCallbacks();

    res.json(result.data);
  })

  /**
   * DELETE /
   * Delete existing push notification callbacks.
   * @route DELETE /
   * @returns {Object} 200 - Null
   */
  .delete('/', async (req, res) => {
    // prettier-ignore
    await new killbill.TenantApi(kbConfig, null, kbAxios).deletePushNotificationCallbacks(xKillbillCreatedBy);

    res.status(200).json();
  });

export default router;
