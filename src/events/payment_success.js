export default function handle_payment_success(event) {
  const { query, params, body, headers, ip, secure, ...rest } = event;
  const data = body;

  console.log('>>> Handling payment success notification...');
  // console.log('with data : ', data); // use to debug (comment when done)
}
