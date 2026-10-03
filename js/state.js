// ------------------------------------------------------------------
// Zustand des Versuchs (wird vom Bedienfeld geändert und von Physik und Darstellung gelesen)
// ------------------------------------------------------------------
import { SETUPS } from './config.js';

export const state = {
  mode: 'basic',      // 'basic' (Grundversuch) oder 'angle' (Winkelversuch)
  powerOn: false,
  current: 4,         // eingestellte Stromstärke in A
  polarity: 1,        // +1: Plus an vorderer Schiene, −1: Plus an hinterer Schiene
  northUp: true,      // Nordpol oben, Südpol unten (beim Winkelversuch in Grundstellung α = 90°)
  angle: 90,          // eingestellter Winkel α zwischen Feld und Strom in Grad
  magnetAngle: 90,    // aktueller Drehwinkel des Magneten (läuft dem eingestellten Winkel hinterher)
  friction: true,
};

export const currentSetup = () => SETUPS[state.mode];
