# KillBill :: Webhook Server 🔔🔎

[Kill Bill](https://docs.killbill.io/latest/what_is_kill_bill) generates various [events](https://docs.killbill.io/latest/kill_bill_events) when certain actions occur within the system.
This server is designed to handle these events by utilizing the [push notifications](https://docs.killbill.io/latest/push_notifications) feature, allowing it to subscribe to and process such events via HTTP.

The **Webhook Server** provides a robust and flexible way to manage and respond to Kill Bill events, ensuring seamless integration with your existing infrastructure.

<picture>
  <source srcset="doc/diagram-dark.svg" media="(prefers-color-scheme: dark)">
  <source srcset="doc/diagram-light.svg" media="(prefers-color-scheme: light)">
  <img src="doc/diagram-light.svg" alt="diagram">
</picture>

## 🔧 Features

- ✅ Single-tenant support
- ❌ Multi-tenant support (🚧upcoming...)
- ✅ RESTful API endpoints
- ✅ Config killbill notification subscription
- ❌ Swagger documentation
- ❌ Authentication system
- ✅ Logger events
- ✅ Event handling functions
- ❌ Database support
- ➖ Killbill models support (included in killbill service)

# 🌳 File Structure

```bash
├───src/
│   ├───middleware/     # Middleware functions for request/response processing
│   ├───models/         # Models objects for request/response processing
│   │
│   ├───services/       # Vendor logic and service layer
│   │   └───killbill.js
│   ├───helpers/        # Utility functions and helper methods
│   │   └───...
│   │
│   ├───routes/         # Route definitions and handlers
│   │   └───config.js
│   │   └───listener.js
│   │
│   ├───actions/        # Business logic and actions performed for each event
│   ├───events/         # Event handlers and listeners
│   │   └───mapping.js
│   │   └─── ...
│   │
│   ├───logger.js       # Logging configuration and utility functions
│   └───index.js        # Main application entry point
│
│
├───test/               # Test functions here
├───Dockerfile          # Instructions for building the Docker image
├───.env                # Environment variables for the **application**
├───app.log             # logs for the **application**
└───package.json
```

- `src > actions/` : Directory containing actions such as **payment processing**, **email notifications**, and **mobile app notifications**. These actions handle specific tasks and business logic related to user interactions and system events.

- `src > index.js` : The main entry point of the application. It sets up the Express server, initializes middleware and routes.

- `src > logger.js` : Sets up the logger to save logs to a file, including the format and logging level.

- `src > helpers > killbill.js` : Helper functions and utilities specific to interacting with the Kill Bill API.

<!-- - `src > services > http.js > httpReqValidation` : -->
<!-- - `src > services > snakeToCamel.js` : -->

# 📍 Endpoints

### `PROCESS` events from Killbill's server.

⚠️ This is a webhook endpoint. Do not use it !! ( Just killbill automatic flow are authorized.)

```bash
# fn() src/routes/listener/POST
curl -X POST {HOST}/kb/listener/ \
     -H 'Content-Type: application/json' \
     -d '{
        eventType : "{EVENT_TYPE}"
        ...any
        }'
```

## Config Killbill callback notifications.

#### `REFRESH` notifications subscription to Killbill.

```bash
# fn() src/routes/config/POST
curl -X POST {HOST}/kb/config/ \
     -H 'Content-Type: application/json' \
     -d '{
        "cb": "The callback URL for Killbill notifications. If not provided, the default URL will be used."
        }'
```

#### `GET` notifications subscription to Killbill.

```bash
# fn() src/routes/config/GET
curl -X GET {HOST}/kb/config/ \
     -H 'Content-Type: application/json'
```

#### `DELETE` notifications subscription to Killbill.

```bash
# fn() src/routes/config/DELETE
curl -X DELETE {HOST}/kb/config/ \
     -H 'Content-Type: application/json' \
```

**NOTE** : for more info please read the **docstring** inside each route function.

# 🔔 Events types Handlers

This is a handlers about each [**event type** from killbill's](https://docs.killbill.io/latest/kill_bill_events) server.

<table>
<thead>
    <tr>
        <th> EVENT NAME </th>
        <th> LOCATION </th>
        <th> KB Generation Condition </th>
    </tr>
</thead>
<tbody>
    <tr>
        <td> ACCOUNT_CREATION </td>
        <td><a href="src/events/account_creation.js"> src > events > account_creation > handle_account_creation </a></td>
        <td>A new customer account is created</td>
    </tr>
    <tr>
        <td> ACCOUNT_CHANGE </td>
        <td><a href="src/events/account_change.js"> src > events > account_change > handle_account_change </a></td>
        <td>A customer account is modified</td>
    </tr>
    <tr>
        <td> BLOCKING_STATE </td>
        <td><a href="src/events/blocking_state.js"> src > events > blocking_state > handle_blocking_state </a></td>
        <td>There is a change in the state of an entitlement or billing</td>
    </tr>
    <tr>
        <td> BROADCAST_SERVICE </td>
        <td><a href="src/events/broadcast_service.js"> src > events > broadcast_service > handle_broadcast_service </a></td>
        <td>Used to broadcast an event to other Kill Bill nodes (Typically used for plugin related events like plugin installation, plugin uninstallation, plugin start, plugin stop, etc.)</td>
    </tr>
    <tr>
        <td> SUBSCRIPTION_CREATION </td>
        <td><a href="src/events/subscription_creation.js"> src > events > subscription_creation > handle_subscription_creation </a></td>
        <td>A new subscription is created</td>
    </tr>
    <tr>
        <td> SUBSCRIPTION_PHASE </td>
        <td><a href="src/events/subscription_phase.js"> src > events > subscription_phase > handle_subscription_phase </a></td>
        <td>A subscription transitions into a different phase</td>
    </tr>
    <tr>
        <td> SUBSCRIPTION_CHANGE </td>
        <td><a href="src/events/subscription_change.js"> src > events > subscription_change > handle_subscription_change </a></td>
        <td>A subscription is modified</td>
    </tr>
    <tr>
        <td> SUBSCRIPTION_CANCEL </td>
        <td><a href="src/events/subscription_cancel.js"> src > events > subscription_cancel > handle_subscription_cancel </a></td>
        <td>A subscription is cancelled</td>
    </tr>
    <tr>
        <td> SUBSCRIPTION_UNCANCEL </td>
        <td><a href="src/events/subscription_uncancel.js"> src > events > subscription_uncancel > handle_subscription_uncancel </a></td>
        <td>A subscription cancellation is undone (Note that subscription cancellation cannot be undone once the cancellation becomes effective)</td>
    </tr>
    <tr>
        <td> SUBSCRIPTION_BCD_CHANGE </td>
        <td><a href="src/events/subscription_bcd_change.js"> src > events > subscription_bcd_change > handle_subscription_bcd_change </a></td>
        <td>The subscription BCD is changed</td>
    </tr>
    <tr>
        <td> ENTITLEMENT_CREATION </td>
        <td><a href="src/events/entitlement_creation.js"> src > events > entitlement_creation > handle_entitlement_creation </a></td>
        <td>A new entitlement is created</td>
    </tr>
    <tr>
        <td> ENTITLEMENT_CANCEL </td>
        <td><a href="src/events/entitlement_cancel.js"> src > events > entitlement_cancel > handle_entitlement_cancel </a></td>
        <td>An entitlement is cancelled</td>
    </tr>
    <tr>
        <td> BUNDLE_PAUSE </td>
        <td><a href="src/events/bundle_pause.js"> src > events > bundle_pause > handle_bundle_pause </a></td>
        <td>A subscription bundle is paused</td>
    </tr>
    <tr>
        <td> BUNDLE_RESUME </td>
        <td><a href="src/events/bundle_resume.js"> src > events > bundle_resume > handle_bundle_resume </a></td>
        <td>A subscription bundle is resumed</td>
    </tr>
    <tr>
        <td> OVERDUE_CHANGE </td>
        <td><a href="src/events/overdue_change.js"> src > events > overdue_change > handle_overdue_change </a></td>
        <td>There is a change is an overdue state</td>
    </tr>
    <tr>
        <td> INVOICE_CREATION </td>
        <td><a href="src/events/invoice_creation.js"> src > events > invoice_creation > handle_invoice_creation </a></td>
        <td>A new invoice is generated</td>
    </tr>
    <tr>
        <td> INVOICE_ADJUSTMENT </td>
        <td><a href="src/events/invoice_adjustment.js"> src > events > invoice_adjustment > handle_invoice_adjustment </a></td>
        <td>An invoice is adjusted</td>
    </tr>
    <tr>
        <td> INVOICE_NOTIFICATION </td>
        <td><a href="src/events/invoice_notification.js"> src > events > invoice_notification > handle_invoice_notification </a></td>
        <td>An invoice is going to be generated for an account in the future (Can be used to notify customers about upcoming bills)</td>
    </tr>
    <tr>
        <td> INVOICE_PAYMENT_SUCCESS </td>
        <td><a href="src/events/invoice_payment_success.js"> src > events > invoice_payment_success > handle_invoice_payment_success </a></td>
        <td>An invoice payment is successful</td>
    </tr>
    <tr>
        <td> INVOICE_PAYMENT_FAILED </td>
        <td><a href="src/events/invoice_payment_failed.js"> src > events > invoice_payment_failed > handle_invoice_payment_failed </a></td>
        <td>An invoice payment fails</td>
    </tr>
    <tr>
        <td> PAYMENT_SUCCESS </td>
        <td><a href="src/events/payment_success.js"> src > events > payment_success > handle_payment_success </a></td>
        <td>Payment is successful</td>
    </tr>
    <tr>
        <td> PAYMENT_FAILED </td>
        <td><a href="src/events/payment_failed.js"> src > events > payment_failed > handle_payment_failed </a></td>
        <td>Payment fails</td>
    </tr>
    <tr>
        <td> TAG_CREATION </td>
        <td><a href="src/events/tag_creation.js"> src > events > tag_creation > handle_tag_creation </a></td>
        <td>A new tag is associated with a Kill Bill resource (account, invoice, etc.)</td>
    </tr>
    <tr>
        <td> TAG_DELETION </td>
        <td><a href="src/events/tag_deletion.js"> src > events > tag_deletion > handle_tag_deletion </a></td>
        <td>A tag associated with a Kill Bill resource (account, invoice, etc.) is deleted</td>
    </tr>
    <tr>
        <td> CUSTOM_FIELD_CREATION </td>
        <td><a href="src/events/custom_field_creation.js"> src > events > custom_field_creation > handle_custom_field_creation </a></td>
        <td>A custom field is created</td>
    </tr>
    <tr>
        <td> CUSTOM_FIELD_DELETION </td>
        <td><a href="src/events/custom_field_deletion.js"> src > events > custom_field_deletion > handle_custom_field_deletion </a></td>
        <td>A custom field is deleted</td>
    </tr>
    <tr>
        <td> TENANT_CONFIG_CHANGE </td>
        <td><a href="src/events/tenant_config_change.js"> src > events > tenant_config_change > handle_tenant_config_change </a></td>
        <td>A Tenant configuration is modified (So, any changes to a catalog, overdue config, etc. within a tenant triggers this event)</td>
    </tr>
    <tr>
        <td> TENANT_CONFIG_DELETION </td>
        <td><a href="src/events/tenant_config_deletion.js"> src > events > tenant_config_deletion > handle_tenant_config_deletion </a></td>
        <td>A Tenant configuration is deleted</td>
    </tr>
  </tbody>
</table>

**NOTES** :

- for more info please read the docstring inside each handler function.
- to know more about event handler mapping read the comments bellow the `src/routes/listener/POST` route function.

# 🚀 Get started

### Clone the Repository and go to the project directory:

```bash
git clone https://github.com/albertolicea00/killbill-webhook-node-server.git
cd killbill-webhook-node-server
```

### Environment Variables

To run this project, you will need to add the `.env.example` environment variables to your `.env` file

### Create and activate virtual environment (optional)

```bash
jsthon -m venv venv
```

- Mac / Linux : `source venv/bin/activate`

- Windows : `venv\Scripts\activate`

- Windows ( bash ) : `source venv/Scripts/activate`

### Install dependencies

```bash
npm install
```

## Run server

```bash
# development mode
npm run dev
```

```bash
# production mode
npm run start
```

## Run lint

```bash
npm run format
```

## Run tests

```bash
npm run test
```

## Feel free to use with [docker](https://docs.docker.com/)

```bash
# Build the image
docker build -t killbill-webhook-server .
```

```bash
# Create container
docker run --name killbill-webhook-container -d -p 5000:5000 killbill-webhook-server
```

```bash
# Run container
docker run killbill-webhook-container
```

```bash
# Stop container
docker stop killbill-webhook-server
```

```bash
# Remove container
docker rmi killbill-webhook-container
```

# 📦 Tech Stack

- `express`

- `axios`

- `killbill`

- `dotenv`

- `nodemon`

- `prettier`

- `winston`
