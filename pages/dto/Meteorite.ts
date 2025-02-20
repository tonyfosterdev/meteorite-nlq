import { MeteoriteDb } from "./MeteoriteDb";

// These DTOs move data around in the application
// Note that there are separate DB and service (this class) DTOs.
// This is helpful for when database models of data vary greatly
// from how we want users to actually use and interact with data to/from
// the service.
export class Meteorite {
  constructor(partial: Partial<Meteorite>) {
    this.name = partial.name ?? "";
    this.id = partial.id ?? Number.MIN_SAFE_INTEGER;
    this.nameType = partial.nameType ?? "";
    this.classification = partial.classification ?? "";
    this.massGrams = partial.massGrams;
    this.fall = partial.fall ?? "";
    this.year = partial.year;
    this.latitude = partial.latitude;
    this.longitude = partial.longitude;
  }

  public name: string;
  public id: number;
  public nameType: string;
  public classification: string;
  public massGrams?: number;
  public fall: string;
  public year?: number;
  public latitude?: number;
  public longitude?: number;

  // Helper method to convert from the Db row to the service DTO
  static fromDbRow(row: MeteoriteDb): Meteorite {
    return new Meteorite({
      name: row.name,
      id: row.id,
      nameType: row.nametype,
      classification: row.recclass,
      massGrams: row.mass_g,
      fall: row.fall,
      year: row.year,
      latitude: row.reclat,
      longitude: row.reclong,
    });
  }
}