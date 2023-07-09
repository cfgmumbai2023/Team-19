from flask import Flask, jsonify
import assemblyai as aai

app = Flask(__name__)
aai.settings.api_key = ""
transcriber = aai.Transcriber()

@app.route('/video1')
def transcribe_video():
    video_url = "https://rr1---sn-5hnekn7z.googlevideo.com/videoplayback?expire=1688866030&ei=jripZPj9EfWMhcIPoaKDwA4&ip=188.241.82.26&id=o-ACFnsGaOI-si5TYkWNcEiLaHePFnODzMxxWGeSRMKN6G&itag=18&source=youtube&requiressl=yes&spc=Ul2SqyC5M6ZdgBBH-h70TkXdRFwy7O5NAo0788sUMw&vprv=1&svpuc=1&mime=video%2Fmp4&ns=nFaPfRdVD5_8ZVtxE-jEAVAO&cnr=14&ratebypass=yes&dur=789.989&lmt=1665273461532774&fexp=24007246,24350017,24362686,51000022&beids=24350017&c=WEB&txp=5438434&n=Mmsr_6_FcZ5l0A&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAIxkvBF_waCPg5HrC6q-ZyDmet8dUmOoojBCple0f-1OAiEApSbG4sNlpMuWZHJhNZJoA1U2_lbKK0JQcCpSkniYPHU%3D%3D"
    transcript = transcriber.transcribe(video_url)
    return transcript.text

if __name__ == '__main__':
    app.run()