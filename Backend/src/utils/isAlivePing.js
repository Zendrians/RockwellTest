import { URL } from "node:url";
import ping from "ping";

export default async function isAlivePing(url) {
  const host = new URL(url).host;
  const pingStatus = await ping.promise.probe(host);
  console.log(`Host alive: ${pingStatus.alive}`);
  return pingStatus.alive;
}
