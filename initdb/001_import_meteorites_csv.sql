-- Copy CSV data into from meteorites file into meteorites table
COPY meteorites(name, id, nametype, recclass, mass_g, fall, year, reclat, reclong, geolocation)
FROM '/docker-entrypoint-initdb.d/meteorites.csv'
CSV HEADER;