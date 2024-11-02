import express from 'express';
import logger from '../logger.js';
import EVENT_HANDLERS_MAP from '../events/mapping.js';

const router = express.Router();

router

  /**
   * POST
   * Processing events from Killbill's server. This is a webhook endpoint. Do not use it !! ( Just killbill automatic flow are authorized.)
   * @route POST /
   * @param {Object} data - The event data from Killbill notifications webhook.
   * @param {string} data.eventType - The type of event received from Killbill.
   * @returns {Object} 200 - Event processed successfully
   * @returns {Object} 400 - Unknown event type
   */
  .post('/', (req, res) => {
    const data = req.body;
    const eventType = data.eventType;

    // Dictionary mapping event types to lists of handler functions :
    //  - if handlers are registered, Execute handler function in the event_handlers mapping
    //  - if handlers are not found for the event type, log exception and returned error response (do noting)
    // NOTE: To create a sequence of actions, include them as functions executed within the handle events
    const handler = EVENT_HANDLERS_MAP[eventType];
    // add new event types in 'EVENT_HANDLERS_MAP' here if they are unsupported ...

    logger.info(
      `Event received from KillBill: '${eventType}' with data: ${JSON.stringify(data)}`
    );

    if (handler) {
      handler(req);
      res.status(200).json({
        status: 'success',
        message: 'Event processed',
        event_request: data,
      });
    } else {
      // Handle unknown event type
      console.error(
        `Unknown event received: ${eventType} with data: ${JSON.stringify(data)}`
      );
      res.status(400).json({
        status: 'failed',
        message: 'Event not processed',
        event_request: data,
      });
    }
  });

export default router;
