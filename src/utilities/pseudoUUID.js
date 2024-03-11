/**
  Generates UUID-like string (approx. 35 characters without token).
  Returns string like (no token): "1bdffcf81fb-2fcba2b48fc-2fb953374b5"
  Returns string like (with token): "2e7-2162a3a4b70-2ae33c8ac3d-2d6f90cefdf"
  @param token String Optional token that gets incorperated as base16
  @return string
*/
export default function pseudoUUID(token = "") {
  if (typeof token !== "string") throw new TypeError("String expected.");

  // Convert token to number and then to base16.
  let num = 0;
  try {
    for (let i = 0; i < token.length; i++) {
      num += token.charCodeAt(i);
    }
  } catch (e) {
    // Reset num and ignore error.
    num = 0;
  }
  const tokenBase16 = num.toString(16);

  // Generate randomId based on Date.now() and Math.random.
  let txt = num !== 0 ? `${tokenBase16}-` : "";
  for (let i = 0; i < 3; i++) {
    txt += Math.floor((Math.random() + 1) * Date.now()).toString(16);
    if (i < 2) txt += "-";
  }
  return txt;
}
