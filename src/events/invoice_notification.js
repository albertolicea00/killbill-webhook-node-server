export default function handle_invoice_notification(event) {
  const { query, params, body, headers, ip, secure, ...rest } = event;
  const data = body;

  console.log('>>> Handling invoice notification notification...');
  // console.log('with data : ', data); // use to debug (comment when done)
}
