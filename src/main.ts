import express from "express";

const server = express();
server.listen(8080);

const __dirname = import.meta.dirname;

server.get("/", (req, res) => {
	console.log(req.url, req.method);
	res.sendFile("/pages/index.html", { root: __dirname });
});

server.get("/about", (req, res) => {
	console.log(req.url, req.method);
	res.sendFile("/pages/about.html", { root: __dirname });
});

server.get("/contact-me", (req, res) => {
	console.log(req.url, req.method);
	res.sendFile("/pages/contact-me.html", { root: __dirname });
});

server.use((req, res) => {
	res.status(404).sendFile("/pages/404.html", { root: __dirname });
});
