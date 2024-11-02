export default function handle_entitlement_cancel(event) {
  const { query, params, body, headers, ip, secure, ...rest } = event;
  const data = body;

  console.log('>>> Handling entitlement_cancel notification...');
  // console.log('with data : ', data); // use to debug (comment when done)
}
