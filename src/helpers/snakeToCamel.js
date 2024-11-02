/**
 * Converts a snake_case string to camelCase.
 *
 * @param {string} str - The snake_case string to convert.
 * @returns {string} - The converted camelCase string.
 */
export default function handle_snakeToCamel(str) {
  return str
    .split('_')
    .map((part, index) => {
      if (index === 0) return part;
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join('');
}
