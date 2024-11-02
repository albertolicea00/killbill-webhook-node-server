export default function handle_payment_failed(event) {
  const { query, params, body, headers, ip, secure, ...rest } = event;
  const data = body;

  console.log('>>> Handling payment failed notification...');
  // console.log('with data : ', data); // use to debug (comment when done)
}
