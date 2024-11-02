export default function handle_invoice_payment_success(event) {
  const { query, params, body, headers, ip, secure, ...rest } = event;
  const data = body;

  console.log('>>> Handling invoice payment success notification...');
  // console.log('with data : ', data); // use to debug (comment when done)
}
