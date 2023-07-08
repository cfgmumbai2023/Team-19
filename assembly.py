# `pip3 install assemblyai` (macOS)
# `pip install assemblyai` (Windows)

import assemblyai as aai

aai.settings.api_key = ""
transcriber = aai.Transcriber()

transcript = transcriber.transcribe("https://rr1---sn-5hnekn7z.googlevideo.com/videoplayback?expire=1688866030&ei=jripZPj9EfWMhcIPoaKDwA4&ip=188.241.82.26&id=o-ACFnsGaOI-si5TYkWNcEiLaHePFnODzMxxWGeSRMKN6G&itag=18&source=youtube&requiressl=yes&spc=Ul2SqyC5M6ZdgBBH-h70TkXdRFwy7O5NAo0788sUMw&vprv=1&svpuc=1&mime=video%2Fmp4&ns=nFaPfRdVD5_8ZVtxE-jEAVAO&cnr=14&ratebypass=yes&dur=789.989&lmt=1665273461532774&fexp=24007246,24350017,24362686,51000022&beids=24350017&c=WEB&txp=5438434&n=Mmsr_6_FcZ5l0A&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAIxkvBF_waCPg5HrC6q-ZyDmet8dUmOoojBCple0f-1OAiEApSbG4sNlpMuWZHJhNZJoA1U2_lbKK0JQcCpSkniYPHU%3D&redirect_counter=1&rm=sn-h5qzy7s&req_id=c7a86e1cdec1a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=q9&mip=165.225.106.121&mm=31&mn=sn-5hnekn7z&ms=au&mt=1688852579&mv=u&mvi=1&pl=22&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAP4oN1snCESed6sK_Gwkaesn5yd4YSSgslXAnWgcIXQDAiBn2uyq4nT2Qk30fCnn5viou3Lm6kgnpLCMFFqglL326Q%3D%3D")
# transcript = transcriber.transcribe("./my-local-audio-file.wav")

print(transcript.text)