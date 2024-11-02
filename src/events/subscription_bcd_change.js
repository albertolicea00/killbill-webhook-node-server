export default function handle_subscription_bcd_change(event) {
  const { query, params, body, headers, ip, secure, ...rest } = event;
  const data = body;

  console.log('>>> Handling subscription bcd change notification...');
  // console.log('with data : ', data); // use to debug (comment when done)
}
