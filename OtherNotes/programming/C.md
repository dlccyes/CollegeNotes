# C

## file
```c
FILE *f = fopen("rttdata.csv", "a");
fprintf(f, "%f,%f,%f\n",time/1000,sampleRTT,A.estimated_rtt);
fclose(f);
```
`"a"` for append, `"w"` for clear & write