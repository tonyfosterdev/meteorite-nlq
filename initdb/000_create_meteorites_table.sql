-- Sample of Data:
-- Header Row:
-- name,id,nametype,recclass,mass (g),fall,year,reclat,reclong,GeoLocation
--
-- Data:
-- Aachen,1,Valid,L5,21,Fell,1880,50.775000,6.083330,"(50.775, 6.08333)"

CREATE TABLE IF NOT EXISTS meteorites (
    name TEXT,
    id INT,
    nametype TEXT,
    recclass TEXT,
    mass_g NUMERIC,
    fall TEXT,
    year INT,
    reclat NUMERIC,
    reclong NUMERIC,
    geolocation TEXT
);