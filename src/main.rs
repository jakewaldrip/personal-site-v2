#[macro_use]
extern crate rocket;

use rocket::{
    Request,
    fs::{FileServer, Options},
};
use rocket_dyn_templates::{Template, context};

#[get("/")]
fn index() -> Template {
    Template::render("index", context! {})
}

#[get("/projects")]
fn projects() -> Template {
    Template::render("projects", context! {})
}

#[get("/dashboard")]
fn dashboard() -> Template {
    Template::render("dashboard", context! {})
}

#[catch(404)]
fn not_found(req: &Request<'_>) -> Template {
    Template::render(
        "errors/404",
        context! {
            uri: req.uri()
        },
    )
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![index, projects, dashboard])
        .mount("/", FileServer::new("static", Options::None))
        .register("/", catchers![not_found])
        .attach(Template::fairing())
}
