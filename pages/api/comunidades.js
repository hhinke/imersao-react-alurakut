import { SiteClient } from "datocms-client";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const TOKEN = "4d0059e3eb1556a17e55ecd5eb290c";
    const client = new SiteClient(TOKEN);

    const record = await client.item.create({
      itemType: "972614",
      ...request.body,
    });

    response.json(record);

    return;
  }

  response.status(404).json({ message: "GET not implemented" });
}
