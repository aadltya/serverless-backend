
export interface Env {
	
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);

		if(request.method === "GET") {
			return Response.json({
				msg: "you sent GET request"
			});
		} else {
			return Response.json({
				msg: "did not send any request"
			});
		}
	},
}
