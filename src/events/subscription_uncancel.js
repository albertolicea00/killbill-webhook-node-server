export default function handle_subscription_uncancel(event) {
  const { query, params, body, headers, ip, secure, ...rest } = event;
  const data = body;

  console.log('>>> Handling subscription uncancel notification...');
  // console.log('with data : ', data); // use to debug (comment when done)
}
