```
STORE "Besar_temperatur" without any value
STORE "Tipe_temperatur" without any value

IF Tipe_temperatur is "Celcius" THEN
DISPLAY Besar_temperatur
ELSE IF Tipe_temperatur is "Fahrenheit" THEN
SET result = (Besar_temperatur - 32.0) * (5.0 / 9.0) THEN
DISPLAY result
ELSE IF Tipe_temperatur is "Kelvin" THEN
SET result = Besar_temperatur - 273,15
DISPLAY result

ENDIF 
```
