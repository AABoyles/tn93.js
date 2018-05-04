var s1 = "CCCATTAGCCCTATTGAGACTGTACCAGTAAAATTAAAGCCAGGAATGGATGGCCCAAAAGTTAAACAATGGCCATTGACAGAAGAAAAAATAAAAGCATTAGTAGAAATTTGTACAGAGATGGAAAAGGAAGGGAAAATTTCAAAAATTGGGCCTGAAAATCCATACAATACTCCAGTATTTGCCATAAAGAAAAAAGACAGTACTAAATGGAGAAAATTAGTAGATTTCAGAGAACTTAATAAGAGAACTCAAGACTTCTGGGAAGTTCAATTAGGAATACCACATCCCGCAGGGTTAAAAAAGAAAAAATCAGTAACAGTACTGGATGTGGGTGATGCATATTTTTCAGTTCCCTTAGATGAAGACTTCAGGAAGTATACTGCATTTACCATACCTAGTATAAACAATGAGACACCAGGGATTAGATATCAGTACAATGTGCTTCCACAGGGATGGAAAGGATCACCAGCAATATTCCAAAGTAGCATGACAAAAATCTTAGAGCCTTTTAGAAAACAAAATCCAGACATAGTTATCTATCAATACATGGATGATTTGTATGTAGGATCTGACTTAGAAATAGGGCAGCATAGAACAAAAATAGAGGAGCTGAGACAACATCTGTTGAGGTGGGGACTTACCACACCAGACAAAAAACATCAGAAAGAACCTCCATTCCTTTGGATGGGTTATGAACTCCATCCTGATAAATGGACAGTACAGCCTATAGTGCTGCCAGAAAAAGACAGCTGGACTGTCAATGACATACAGAAGTTAGTGGGGAAATTGAATTGGGCAAGTCAGATTTACCCAGGGATTAAAGTAAGGCAATTATGTAAACTCCTTAGAGGAACCAAAGCACTAACAGAAGTAATACCACTAACAGAAGAAGCAGAGCTAGAACTGGCAGAAAACAGAGAGATTCTAAAAGAACCAGTACATGGAGTGTATTATGACCCATCAAAAGACTTAATAGCAGAAATACAGAAGCAGGGGCAAGGCCAATGGACATATCAAATTTATCAAGAGCCATTTAAAAATCTGAAAACAGGAAAATATGCAAGAATGAGGGGTGCCCACACTAATGATGTAAAACAATTAACAGAGGCAGTGCAAAAAATAACCACAGAAAGCATAGTAATATGGGGAAAGACTCCTAAATTTAAACTGCCCATACAAAAGGAAACATGGGAAACATGGTGGACAGAGTATTGGCAAGCCACCTGGATTCCTGAGTGGGAGTTTGTTAATACCCCTCCCTTAGTGAAATTATGGTACCAGTTAGAGAAAGAACCCATAGTAGGAGCAGAAACCTTC";

var s2 = "CCCATTAGTCCTATTGAAACTGTACCAGTAAAATTAAAGCCAGGAATGGATGGCCCAAAAGTTAAACAATGGCCATTGACAGAGGAAAAAATAAAAGCATTGGTAGAAATTTGTACAGAAATGGAAAAGGAAGGAAAAATTTCCAAAATTGGGCCTGAAAATCCATACAATACTCCAGTATTTGCCATAAAGAAAAAAGACAGTACTAAATGGAGAAAATTAGTAGATTTCAGAGAACTTAATAAGAGAACTCAAGACTTCTGGGAAGTTCAGTTAGGAATACCACATCCTGCAGGGTTAAAAAAGAAGAAATCAGTAACAGTATTGGATGTGGGTGATGCATATTTTTCAGTTCCCTTAGATAAAGAGTTCAGGAAGTATACTGCATTTACCATACCTAGTATAAACAATGAAACACCACGGATTAGATATCAGTACAATGTGCTTCCACAAGGGTGGAAAGGATCACCAGCAATATTCCAAAGTAGTATGACAAAAATCTTAGAGCCTTTTAAAAAACAAAATCCAGAAATAGTTATCTATCAATACATGGATGATTTGTATGTAGGATCTGATTTAGAAATAGGGCAGCATAGAATAAAAATAGAGGAACTGAGAGAACATCTGTTAAAGTGGGGGTTTACCACACCGGACAAGAAACATCAGAAAGAACCTCCATTTCTTTGGATGGGTTATGAACTCCATCCTGATAAATGGACAGTACAGCCTATAGTGCTGCCAGAAAAAGACAGCTGGACTGTCAATGACATACAGAAGTTAGTGGGAAAATTGAATTGGGCAAGTCAGATTTATGCAGGGATTAAAGTAAAGCAATTATGTAAACTCCTTAGGGGAACCAAAGCACTAACAGAAGTAGTACAACTAACAAAAGAAGCAGAGCTAGAACTGGCAGAAAATAGGGAGATTCTAAAAGAACCAGTACATGGAGTGTATTATGACCCATCAAAAGACTTAATAGCAGAAATACAGAAGCAGGGGCAAGGCCAATGGACATACCAAATTTATCAAGAGCCATTTAAAAACCTGAAAACAGGAAAGTATGCAAGAATGAGGGGTGCCCACACTAATGATGTAAAACAATTAACAGAGGCAGTACAAAAAGTAGCCACAGAAAGCATAGTAATATGGGGAAAGACTCCTAAATTTAAACTACCCATACAAAAAGAAACATGGGAGGCATGGTGGACAGAGTATTGGCAAGCCACCTGGATTCCTGAGTGGGAGTTTGTCAATACCCCTCCCTTAGTAAAATTGTGGTACCAGTTAGAAAAAGAACCCATAATAGGAGCAGAAACTTTC";

QUnit.test( "Default", assert => {
	assert.expect(2);
	var a = tn93(s1, s2);
	var b = tn93(s1, s2);
	assert.equal(a, b, "Function is Stable." );
	assert.ok(a - 0.045156 < .0000001 && a - 0.045156 > -.0000001, "Function is Correct.");
});

QUnit.test( "Resolve", assert => {
	assert.expect(3);
	var a = tn93(s1, s2, "RESOLVE", 100);
	var b = tn93(s1, s2, "RESOLVE", 100);
	assert.equal(a, b, "Function is Stable.");
	assert.notEqual(a, 1, "Function returns non-trivial results");
	assert.ok(a - 0.045156 < .0000001 && a - 0.045156 > -.0000001, "Function is Correct.");
});

QUnit.test( "Average", assert => {
	assert.expect(3);
	var a = tn93(s1, s2, "AVERAGE", 100);
	var b = tn93(s1, s2, "AVERAGE", 100);
	assert.equal(a, b, "Function is Stable.");
	assert.notEqual(a, 1, "Function returns non-trivial results");
	assert.ok(a - 0.045156 < .0000001 && a - 0.045156 > -.0000001, "Function is Correct.");
});

QUnit.test( "Skip", assert => {
	assert.expect(3);
	var a = tn93(s1, s2, "SKIP", 100);
	var b = tn93(s1, s2, "SKIP", 100);
	assert.equal(a, b, "Function is Stable.");
	assert.notEqual(a, 1, "Function returns non-trivial results");
	assert.ok(a - 0.045156 < .0000001 && a - 0.045156 > -.0000001, "Function is Correct.");
});

QUnit.test( "GapMM", assert => {
	assert.expect(3);
	var a = tn93(s1, s2, "GAPMM", 100);
	var b = tn93(s1, s2, "GAPMM", 100);
	assert.equal(a, b, "Function is Stable.");
	assert.notEqual(a, 1, "Function returns non-trivial results");
	assert.ok(a - 0.045156 < .0000001 && a - 0.045156 > -.0000001, "Function is Correct.");
});