from flask import Flask, request, jsonify
from flask_cors import CORS
from collections import Counter

app = Flask(__name__);
CORS(app)
@app.route('/',methods=['GET'])
def home_page():
	return ('Hello World');

@app.route('/hand_checker', methods=['POST'])
def hand_checker():
	pHand = request.form.getlist('hand[]')
	dHand = request.form.getlist('hand2[]')

	def counted(array,counter):
		for c in array:
			counter[c] += 1
		return dict(counter)

	def countDup(hand):
		cntHand = Counter()
		valHand = []
		for i in range(len(hand)):
			valHand.append(hand[i][0])
		comp = counted(valHand,cntHand)
		print comp
		return comp

	taco = countDup(pHand)

	print taco

	return jsonify({
		'message': 'You have %s.' % (taco)
	})



if __name__ == '__main__':
	app.run(port=5001, debug=True)
