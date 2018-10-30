var finalGrade = function(exam, project) {
	var result = 
	(exam > 90 || project > 10) ? 100 :
	(exam > 75 && project >= 5) ? 90 :
	(exam > 50 && project >= 2) ? 75:
	0;
	return result;
}