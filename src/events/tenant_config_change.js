export default function handle_tenant_config_change(event) {
  const { query, params, body, headers, ip, secure, ...rest } = event;
  const data = body;

  console.log('>>> Handling tenant config change notification...');
  // console.log('with data : ', data); // use to debug (comment when done)
}
