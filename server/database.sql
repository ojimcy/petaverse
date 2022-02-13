CREATE  DATABASE petaverse

CREATE  TABLE users(
    id SERIAL PRIMARY KEY,
    wallet VARCHAR(226),
    username VARCHAR(50),
    email VARCHAR(226),
    twiter_link VARCHAR(226),
    instagram_link VARCHAR(226),
    website_link VARCHAR(226),
    profile_image VARCHAR(226),
    profile_banner VARCHAR(226)
)