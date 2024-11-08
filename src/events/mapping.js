import * as eventHandlers from '../events/index.js';

export default {
  ACCOUNT_CREATION: eventHandlers.handle_account_creation,
  ACCOUNT_CHANGE: eventHandlers.handle_account_change,
  BLOCKING_STATE: eventHandlers.handle_blocking_state,
  BROADCAST_SERVICE: eventHandlers.handle_broadcast_service,
  SUBSCRIPTION_CREATION: eventHandlers.handle_subscription_creation,
  SUBSCRIPTION_PHASE: eventHandlers.handle_subscription_phase,
  SUBSCRIPTION_CHANGE: eventHandlers.handle_subscription_change,
  SUBSCRIPTION_CANCEL: eventHandlers.handle_subscription_cancel,
  SUBSCRIPTION_UNCANCEL: eventHandlers.handle_subscription_uncancel,
  SUBSCRIPTION_BCD_CHANGE: eventHandlers.handle_subscription_bcd_change,
  ENTITLEMENT_CREATION: eventHandlers.handle_entitlement_creation,
  ENTITLEMENT_CANCEL: eventHandlers.handle_entitlement_cancel,
  BUNDLE_PAUSE: eventHandlers.handle_bundle_pause,
  BUNDLE_RESUME: eventHandlers.handle_bundle_resume,
  OVERDUE_CHANGE: eventHandlers.handle_overdue_change,
  INVOICE_CREATION: eventHandlers.handle_invoice_creation,
  INVOICE_ADJUSTMENT: eventHandlers.handle_invoice_adjustment,
  INVOICE_NOTIFICATION: eventHandlers.handle_invoice_notification,
  INVOICE_PAYMENT_SUCCESS: eventHandlers.handle_invoice_payment_success,
  INVOICE_PAYMENT_FAILED: eventHandlers.handle_invoice_payment_failed,
  PAYMENT_SUCCESS: eventHandlers.handle_payment_success,
  PAYMENT_FAILED: eventHandlers.handle_payment_failed,
  TAG_CREATION: eventHandlers.handle_tag_creation,
  TAG_DELETION: eventHandlers.handle_tag_deletion,
  CUSTOM_FIELD_CREATION: eventHandlers.handle_custom_field_creation,
  CUSTOM_FIELD_DELETION: eventHandlers.handle_custom_field_deletion,
  TENANT_CONFIG_CHANGE: eventHandlers.handle_tenant_config_change,
  TENANT_CONFIG_DELETION: eventHandlers.handle_tenant_config_deletion,
  // add new event types here if they are unsupported ...
};
