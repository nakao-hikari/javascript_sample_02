//�O���ϐ��̐錾�E��`�i�ȉ��Q�̊֐��ŋ��ʂ��ė��p�j
var scale = 100;

// �������g�傷��֐�
function enlarge(){
   scale *= 1.25;  // scale = scale * 1.25 �Ɠ��`�i���݂�scale��1.25�{�j
   var obj = document.getElementById('ID07');	
   obj.style.fontSize = scale + '%';
}
//�������k������֐�
function reduce(){
   scale /= 1.25;  // ���݂�scale��1.25�Ŋ���
   var obj = document.getElementById('ID07');	
   obj.style.fontSize = scale + '%';
}

// ���[�U�[���͂Ń^�[�Q�b�g�v�f�̔w�i�F��ύX
function ChangeBGColor() {
  var obj = document.getElementById('ID08'); // �^�[�Q�b�g�v�f
  var col = document.getElementById('COL'); // ����
  obj.style.backgroundColor = col.value;
}

// ���[�U�[���͂Ń^�[�Q�b�g�v�f�̕������ύX
function ChangeContent(){
    var m = document.getElementById('ID09'); // �^�[�Q�b�g�v�f
    var n = document.getElementById('NAME'); // ����
    var res = '����ɂ��� <b>' + n.value + '</b> ����';
    m.innerHTML = res;
}

// �Q�̒l���|���Z����v���O����
function Calc01() {
    var ans = document.getElementById('ANS'); // �^�[�Q�b�g�v�f
    var x = document.getElementById('X'); // ���͂P
    var y = document.getElementById('Y'); // ���͂Q
    ans.value =Number( x.value ) * Number( y.value );
}

// ���a�����߂�v���O����
function Calc02() {
  var s = 0;
  var xs = Number(XS.value);
  var xe = Number(XE.value);

  // �ϐ� s �ɏ����l�𑫂�����
  for(var i=xs; i<=xe; i++){
    s = s + i;
  }
  ANS2.value = s;
}

// �N���b�N�C�x���g�ɔ�������C�x���g���X�i�[���`
window.onload = function() {
    var btn = document.getElementById('CALC03');
    btn.addEventListener('click', Calc03, false);
}
// �C�x���g�n���h���[
function Calc03() {
    var ans = document.getElementById('ANS3');
    var x = document.getElementById('X3');
    var y = document.getElementById('Y3');
    ans.value =Number( x.value ) * Number( y.value );
}

// JavaScript Sample 02