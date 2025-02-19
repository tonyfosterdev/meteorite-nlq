import { MeteoriteDb } from "./MeteoriteDb";

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