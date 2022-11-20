export class Helper {
  public static ConvertObjectToArrayOfKeys(object: object): string[] {
    let array: string[] = [];
    for (const key in object) {
      array.push(key);
    }
    return array;
  }
}
