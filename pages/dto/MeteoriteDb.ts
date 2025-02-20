// These DTOs move data around in the application
// Note that there are separate DB (this class) and service DTOs.
// This is helpful for when database models of data vary greatly
// from how we want users to actually use and interact with data to/from
// the service.
export class MeteoriteDb {
  public name: string = "";
  public id: number = Number.MIN_SAFE_INTEGER;
  public nametype: string = ""
  public recclass: string = ""
  public mass_g: number = Number.MIN_SAFE_INTEGER;
  public fall: string = ""
  public year: number = Number.MIN_SAFE_INTEGER;
  public reclat: number = Number.MIN_SAFE_INTEGER;
  public reclong: number = Number.MIN_SAFE_INTEGER;
  public geolocation: string = "";
}
