export interface IUNIT {
  [key: string]: string
}

export const UNITS: { [key: string]: IUNIT } = {
  LENGTH: {
    nm: "nanometers",
    mm: "millimeters",
    cm: "centimeters",
    m: "meters",
    km: "kilometers",
    mi: "miles",
    in: "inch",
    ft: "foot",
    yd: "yard",
    li: "link",
    rd: "rod",
    ch: "chain",
    A: "angstrom",
    thou: "mil",
  },
  TIME: {
    sec: "seconds",
    min: "minutes",
    hr: "hours",
    day: "days",
    week: "weeks",
    month: "months",
    year: "years",
    decade: "decades",
    century: "centuries",
    millennium: "millennia",
  },
}
